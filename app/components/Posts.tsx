import Link from 'next/link'
import { formatDate, getBlogPosts } from 'app/blog/utils'
import RedLink from './RedLink'

export function BlogPosts() {
    let allBlogs = getBlogPosts()

    return (
        <div>
            {allBlogs
                .sort((a, b) => {
                    if (
                        new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
                    ) {
                        return -1
                    }
                    return 1
                })
                .map((post) => (
                    <div
                        key={post.slug}
                    >
                        <div className="w-full flex flex-row h-8 truncate">
                            <p className="mr-2 text-neutral-600 text-sm self-center grow">
                                {formatDate(post.metadata.publishedAt, false)}
                            </p>
                            <div className='grow-2 h-full self-center pt-1 mr-2'>
                                <RedLink href={`/blog/${post.slug}`}>
                                    {post.metadata.title}
                                </RedLink>
                            </div>
                            <p className="mr-2 text-neutral-600 text-sm self-center shrink-8 truncate">
                                {post.metadata.summary}
                            </p>
                        </div>
                    </div>
                ))}
        </div>
    )
}